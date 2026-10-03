/**
 * Usage (from the project root):
 *   node make-natural.cjs src/assets
 *
 * Reads  <dir>/styleMapLight.json  and  <dir>/styleMapDark.json
 * Writes <dir>/styleMapLight.natural.json  and  <dir>/styleMapDark.natural.json
 *
 * Only color properties (and the top-level "sky") are changed.
 * Widths, filters, zooms, fonts, sources ... stay exactly as they are.
 * Every palette value is in the THEMES object below, so tweak freely.
 */
const fs = require("fs");
const path = require("path");

const THEMES = {
  light: {
    file: "styleMapLight",
    sky: {
      "sky-color": "#86c0ea",
      "horizon-color": "#d8eaf4",
      "fog-color": "#e6ece9",
      "sky-horizon-blend": 0.5,
      "horizon-fog-blend": 0.5,
      "fog-ground-blend": 0.5,
    },
    land: "#f1eee6",
    forest: "rgba(170, 207, 150, 0.6)",
    nationalPark: "rgba(182, 216, 160, 0.65)",
    reserve: "rgba(190, 220, 168, 0.6)",
    residential: "rgba(230, 224, 212, 0.5)",
    cemeteryStadium: "rgba(200, 222, 182, 0.6)",
    water: "#a3cde9",
    waterShadow: "transparent",
    waterway: "#8fc1e3",
    aeroway: "#e2ddd3",
    building: "#ddd6ca",
    buildingTop: "#e9e3d8",
    buildingOutline: "#d3ccbf",
    // roads
    mot: { case: "#e0a24b", fill: "#fbc97a" },
    trunk: { case: "#e3b46c", fill: "#fcd9a2" },
    pri: { case: "#e6cd96", fill: "#fdebc0" },
    sec: { case: "#ddd6c8", fill: "#ffffff" },
    minor: { case: "#ddd6c8", fill: "#ffffff" },
    service: { case: "#e3ddd0", fill: "#fbfaf6" },
    path: "#c9b9a0",
    rail: "#c8c3ba",
    railDash: "#ffffff",
    tunnelCase: "#d3cdc0",
    tunnelFill: "#f4f0e8",
    tunnelPath: "#cdbfa8",
    // lines
    boundary: "#d8c4c6",
    countryLine: "#cdb3b6",
    countryOutline: "#f1eee6",
    // text
    waterText: "#4a86b0",
    waterHalo: "#e6f1f8",
    poiText: "#4d8a52",
    poiHalo: "#eef4e8",
    roadText: "#7d7d76",
    roadHalo: "#ffffff",
    placeText: "#5b6670",
    placeHalo: "rgba(255,255,255,0.6)",
    countryText: "#8a949c",
    countryHalo: "#f1eee6",
  },

  dark: {
    file: "styleMapDark",
    sky: {
      "sky-color": "#0b1620",
      "horizon-color": "#1c2a30",
      "fog-color": "#1a1f1d",
      "sky-horizon-blend": 0.5,
      "horizon-fog-blend": 0.5,
      "fog-ground-blend": 0.5,
    },
    land: "#1a1f1d",
    forest: "rgba(34, 66, 46, 0.7)",
    nationalPark: "rgba(38, 74, 50, 0.65)",
    reserve: "rgba(42, 78, 54, 0.6)",
    residential: "rgba(44, 50, 47, 0.5)",
    cemeteryStadium: "rgba(36, 62, 46, 0.6)",
    water: "#10283c",
    waterShadow: "#10283c",
    waterway: "#173a56",
    aeroway: "#2b312f",
    building: "#2a302e",
    buildingTop: "#303734",
    buildingOutline: "#252b29",
    mot: { case: "#35301f", fill: "#8a7448" },
    trunk: { case: "#302c20", fill: "#7a6a47" },
    pri: { case: "#2d2a20", fill: "#6b6046" },
    sec: { case: "#272c2a", fill: "#454c48" },
    minor: { case: "#252a28", fill: "#3a413e" },
    service: { case: "#232826", fill: "#343a37" },
    path: "#4a514d",
    rail: "#3a403d",
    railDash: "#5b625e",
    tunnelCase: "#212624",
    tunnelFill: "#2a2f2d",
    tunnelPath: "#3a403d",
    boundary: "#4a5651",
    countryLine: "#5a6862",
    countryOutline: "#1a1f1d",
    waterText: "#6fa8d0",
    waterHalo: "#10283c",
    poiText: "#7fb88a",
    poiHalo: "#1a1f1d",
    roadText: "#a3aaa1",
    roadHalo: "#1a1f1d",
    placeText: "#d6dcd4",
    placeHalo: "rgba(20,26,23,0.85)",
    countryText: "#a8b3ac",
    countryHalo: "#1a1f1d",
  },
};

function buildRules(T) {
  const road = (cls) => [
    { re: new RegExp(`_${cls}_case`), props: { "line-color": T[cls].case } },
    { re: new RegExp(`_${cls}_fill`), props: { "line-color": T[cls].fill } },
  ];
  // First matching rule wins for each property, so order matters.
  return [
    // exact layers
    { re: /^background$/, props: { "background-color": T.land } },
    { re: /^landcover$/, props: { "fill-color": T.forest } },
    { re: /^park_national_park$/, props: { "fill-color": T.nationalPark } },
    { re: /^park_nature_reserve$/, props: { "fill-color": T.reserve } },
    { re: /^landuse_residential$/, props: { "fill-color": T.residential } },
    { re: /^landuse$/, props: { "fill-color": T.cemeteryStadium } },
    { re: /^waterway$/, props: { "line-color": T.waterway } },
    { re: /^water$/, props: { "fill-color": T.water } },
    { re: /^water_shadow$/, props: { "fill-color": T.waterShadow } },
    { re: /^aeroway-/, props: { "line-color": T.aeroway } },
    { re: /^building$/, props: { "fill-color": T.building } },
    {
      re: /^building-top$/,
      props: {
        "fill-color": T.buildingTop,
        "fill-outline-color": T.buildingOutline,
      },
    },

    // tunnels first (so they don't fall into the generic road rules)
    { re: /^tunnel_path$/, props: { "line-color": T.tunnelPath } },
    { re: /^tunnel_rail_dash$/, props: { "line-color": T.railDash } },
    { re: /^tunnel_rail$/, props: { "line-color": T.rail } },
    { re: /^tunnel_.*_case$/, props: { "line-color": T.tunnelCase } },
    { re: /^tunnel_.*_fill$/, props: { "line-color": T.tunnelFill } },

    // roads + bridges
    ...road("mot"),
    ...road("trunk"),
    ...road("pri"),
    ...road("sec"),
    ...road("minor"),
    ...road("service"),
    { re: /^(road|bridge)_path$/, props: { "line-color": T.path } },
    { re: /^rail_dash$/, props: { "line-color": T.railDash } },
    { re: /^rail$/, props: { "line-color": T.rail } },

    // boundaries
    { re: /^boundary_(county|state)$/, props: { "line-color": T.boundary } },
    { re: /^boundary_country_inner$/, props: { "line-color": T.countryLine } },
    { re: /^boundary_country_outline$/, props: { "line-color": T.countryOutline } },

    // labels
    {
      re: /^(watername_|waterway_label)/,
      props: { "text-color": T.waterText, "text-halo-color": T.waterHalo },
    },
    {
      re: /^poi_/,
      props: { "text-color": T.poiText, "text-halo-color": T.poiHalo },
    },
    {
      re: /^roadname_/,
      props: { "text-color": T.roadText, "text-halo-color": T.roadHalo },
    },
    {
      re: /^place_(country|state|continent)/,
      props: {
        "text-color": T.countryText,
        "text-halo-color": T.countryHalo,
      },
    },
    {
      re: /^place_/,
      props: {
        "text-color": T.placeText,
        "icon-color": T.placeText,
        "text-halo-color": T.placeHalo,
      },
    },
  ];
}

function convert(style, T) {
  const rules = buildRules(T);
  let changed = 0;

  for (const layer of style.layers) {
    if (!layer.paint) continue;
    const applied = new Set();
    for (const rule of rules) {
      if (!rule.re.test(layer.id)) continue;
      for (const [prop, value] of Object.entries(rule.props)) {
        if (applied.has(prop) || !(prop in layer.paint)) continue;
        layer.paint[prop] = value;
        applied.add(prop);
        changed++;
      }
    }
  }

  style.sky = T.sky;
  return changed;
}

const dir = process.argv[2] || ".";
for (const T of Object.values(THEMES)) {
  const src = path.join(dir, `${T.file}.json`);
  const dst = path.join(dir, `${T.file}.natural.json`);
  if (!fs.existsSync(src)) {
    console.error(`skip: ${src} not found`);
    continue;
  }
  const style = JSON.parse(fs.readFileSync(src, "utf8"));
  const n = convert(style, T);
  fs.writeFileSync(dst, JSON.stringify(style, null, 2));
  console.log(`${dst}  (${n} color values updated)`);
}
