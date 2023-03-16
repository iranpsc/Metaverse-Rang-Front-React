import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';

const PromiseModal = (WrappedComponent, axios) => {
  const PromiseModalComponent = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      axios.interceptors.request.use(
        function (config) {
          setLoading(true);
          return config;
        },
        function (error) {
          setLoading(false);
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        function (response) {
          setTimeout(() => {
            setLoading(false);
          }, 1000)

          return response;
        },
        function (error) {
          setLoading(false);
          return Promise.reject(error);
        }
      );
    }, []);

    return (
      <>
        <WrappedComponent {...props}>
          {
            <>
              {loading && <Loading />}
              {props.children}
            </>
          }
        </WrappedComponent>
      </>
    );
  };
  return PromiseModalComponent;
};
export default PromiseModal;
