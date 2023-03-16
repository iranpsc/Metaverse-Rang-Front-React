import BlueImage from '../../Assets/images/blue.png';
import RedImage from '../../Assets/images/red.png';
import YellowImage from '../../Assets/images/yellow.png';


export const RESIDENTIAL = {
    "a": "ساختمان مسکونی فروخته شده  و قیمت گذاری شده",
    "b": "ساختمان مسکونی فروخته شده  و قیمت گذاری نشده",
    "c": "ساختمان مسکونی قیمت گذاری نشده",
    "d": "ساختمان مسکونی قیمت گذاری شده",
    "e": "ساختمان مسکونی پیش خرید شده",
    "f": "ساختمان مسکونی قفل غیر قابل فروش",
    "g": "ساختمان مسکونی دارای محدودیت معامله"
}

export const COMMERCIAL = {
    "h": "ساختمان تجاری فروخته شده  و قیمت گذاری شده",
    "i": "ساختمان تجاری فروخته شده  و قیمت گذاری نشده",
    "j": "ساختمان مسکونی قیمت گذاری نشده",
    "k": "ساختمان مسکونی قیمت گذاری شده",
    "l": "ساختمان تجاری پیش خرید شده",
    "m": "ساختمان تجاری قفل غیر قابل فروش",
    "n": "ساختمان تجاری دارای محدودیت معامله",
}

export const EDUCATIONAL = {
    "o": "ساختمان آموزشی فروخته شده  و قیمت گذاری شده",
    "p": "ساختمان آموزشی فروخته شده  و قیمت گذاری نشده",
    "q": "ساختمان آموزشی قیمت گذاری نشده",
    "r": "ساختمان آموزشی قیمت گذاری شده",
    "ss": "ساختمان آموزشی پیش خرید شده",
    "tt": "ساختمان آموزشی قفل غیر قابل فروش",
    "uu": "ساختمان آموزشی دارای محدودیت معامله",
}


export default function FeatureType(karbari) {
    if(RESIDENTIAL[karbari]) {
        return "ساختمان مسکونی"
    }

    if(COMMERCIAL[karbari]) {
        return "ساختمان تجاری"
    }

    if(EDUCATIONAL[karbari]) {
        return "ساختمان آموزشی"
    }

    return "نامشخص"
}

export function FeatureColor(rgb) {
    if(RESIDENTIAL[rgb]) {
        return YellowImage;
    }

    if(COMMERCIAL[rgb]) {
        return RedImage;
    }

    if(EDUCATIONAL[rgb]) {
        return BlueImage;
    }
    
    return false;
}

export function FeaturePrice(rgb) {
    if(RESIDENTIAL[rgb]) {
        return 10000;
    }

    if(COMMERCIAL[rgb]) {
        return 30000;
    }

    if(EDUCATIONAL[rgb]) {
        return 60000;
    };
}

export function FeatureSvg(rgb) {
    if(RESIDENTIAL[rgb]) {
        return '/metaverse/successful/residential';
    }

    if(COMMERCIAL[rgb]) {
        return '/metaverse/successful/commercial';
    }

    if(EDUCATIONAL[rgb]) {
        return '/metaverse/successful/educational';
    }
}