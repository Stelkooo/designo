import React from 'react';

type Props = {
  office: string;
  address: string;
  city: string;
  telephone: string;
  email: string;
};

export default function Address({
  address,
  city,
  email,
  office,
  telephone,
}: Props) {
  return (
    <>
      <address className="not-italic first-line:font-bold">
        Designo {office} Office
        <br />
        {address}
        <br />
        {city}
      </address>
      <address className="not-italic first-line:font-bold">
        Contact Us
        <br />P : {telephone}
        <br />M : <a href={`mailto:${email}`}>{email}</a>
      </address>
    </>
  );
}
