// @flow

import React, { Fragment } from 'react';
import { ARWrapper } from '../components/ar-wrapper';
import { InstagramSocialComponent } from '../components/instagram';
import {
  CONTACT_EMAILS,
  CONTACT_PHONES,
} from '../constants/contact';
import contactBGImage from '../assets/images/background/contact.jpg';

import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { LightboxContainer } from '../containers/lightbox';

const getEmailList = () => CONTACT_EMAILS.map((item: Object) => (
  <div
    className='contact__item'
    key={item.value}
  >
    <div className='contact__label'>
      {item.label}
    </div>
    <div className='contact__value'>
      <a
        href={`mailto:${item.value}`}
        alt={item.value}
      >
        {item.value}
      </a>
    </div>
  </div>
));

const getPhonesList = () => CONTACT_PHONES.map((item: Object) => (
  <div
    className='contact__item'
    key={item.value}
  >
    <div className='contact__label'>
      {item.label}
    </div>
    <div className='contact__value'>
      <a
        href={`tel:${item.value}`}
        alt={item.value}
      >
        {item.value}
      </a>
    </div>
  </div>
));

const getSocialIcons = () => <InstagramSocialComponent isNotFullWidth />;

export const ContactView = () => (
  <Fragment>
  <HeaderContainer />
  <MenuContainer />
  <LightboxContainer />
  <div className='contact'>
    <ARWrapper
      backgroundImage={contactBGImage}
      isContactPage
    >
      <div className='contact__content'>
        {getEmailList()}
        {getPhonesList()}
        {getSocialIcons()}
      </div>
    </ARWrapper>
  </div>
  </Fragment>
);
