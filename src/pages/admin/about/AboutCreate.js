import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';


import { AiOutlineEdit  } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { getAboutsByCount } from '../../../functions/about';

const AboutCreate = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllAbout();
  }, []);

  const loadAllAbout = () => {
    setLoading(true);
    getAboutsByCount(100)
      .then((res) => {
        setAbouts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <AdminNav />
        </div>

        <div className='col'>
          {loading ? (
            <h4 className='text-danger'>Loading...</h4>
          ) : (
            <>
              <div className='mb-5'>
                <h4 className='mb-2'>Hakkımızda</h4>
              </div>
            </>
          )}

          <hr />

          {abouts.map((c) => (
            <div className='alert alert-secondary ' key={c._id}>
              <span>
                {' '}
                <b> Hakkımızda Açıklaması : </b> {c.description}
              </span>

              <Link to={`/admin/about/${c.slug}`}>
                <span className='btn btn-sm float-right'>
                  <AiOutlineEdit className='text-warning' />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCreate;
