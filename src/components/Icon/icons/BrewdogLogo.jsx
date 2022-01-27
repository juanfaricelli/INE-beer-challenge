import React from 'react';
import { string } from 'prop-types';

const BrewdogLogo = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    version="1.0"
    viewBox="0 0 1024 289"
  >
    <g fill={color}>
      <path d="M80 24.6c-8.5 3.6-20.7 8.6-27 11.3l-11.5 4.8-.7 7.3c-1.3 12.4-5.9 19-15.7 22.5-2.4.8-6.5 1.5-9.2 1.5-4.4 0-4.9.2-5.5 2.6-1.6 6.2 2.7 45.5 7 63.9 3.1 13.6 8.1 31.1 10.6 37 .4 1.1 1.8 4.5 3 7.5 3.9 9.6 9 20 9.7 20 .5-.1 4.8-3.5 9.8-7.6 4.9-4.2 9.8-8 10.8-8.6 1-.5 1.6-1.2 1.4-1.5-.3-.2-5.8 1.6-12.3 4.2-7.1 2.8-12.1 4.2-12.6 3.7-1-1 14.3-15.6 22.2-21.3 2.5-1.7 4.7-3.4 4.9-3.6.3-.2-2-2.9-5.1-6.1-9.5-9.8-16-21.8-19.8-36.7-2.4-9.6-2.8-25.1-.6-28.1 1.4-1.9 1.5-1.9 2.2.1 9.1 25.4 22.4 38.9 46 46.6 5.5 1.9 9.2 2.3 17.9 2.4 13 0 19.2-1.4 30-6.7 8.8-4.3 12.5-7.7 12.5-11.3 0-2.7 2.6-9.7 4.8-13.3 1.3-2.1 1.6-2.1 3.2-.7 1.6 1.5 1.8 1.3 2.3-1.5.7-3.2 2.7-3.9 4.7-1.5.7.8 1.6 1.5 2 1.5 1.1 0 6.6-14.4 7.3-18.7.3-1.7.8-3.7 1.2-4.3.4-.6.7-6.9.6-14 0-14.7.9-16.2 5.4-8.7 3.9 6.7 6.6 15.3 7.9 25.2l1.3 9 .7-8c.9-10.6 1.4-12.7 2.9-12.2 3.4 1.1 6.3 21.6 4.7 33.7-1 8.5-5.7 25.2-7.2 25.8-.4.2-.8.8-.8 1.3 0 2-11 17.5-15.4 21.9-2.5 2.4-4.6 4.7-4.6 5.1 0 .3 3.3 3 7.3 6 14.3 10.6 22.6 18.9 18.9 18.9-1 0-8.9-2.7-18.4-6.4-3.8-1.4-6.8-2.4-6.8-2.2 0 .3 5.4 4.5 12 9.5l12 9.1 3.4-6.8c6-12 13.3-32 17.6-48.7 1.1-4.4 2.3-8.7 2.5-9.5.3-1-.6-2-2.5-2.9-2.6-1.1-2.9-1.6-1.9-2.8.7-.8 2-1.2 3-1 1.9.5 3.4-2.3 4.4-7.8.2-1.7.9-5.3 1.4-8 .5-2.8.8-6.6.6-8.5-.1-1.9.2-3.8.6-4.1 1-.6 3.2-29.6 2.3-31-.3-.5-2.6-.9-5.2-.9s-6.8-.7-9.4-1.5c-10.2-3-14.6-9.1-15.7-21.5-.4-4.4-.9-8.1-1.1-8.3-.3-.2-4.1-1.7-8.5-3.5-19.8-7.8-43.2-17.3-44.7-18.2-2.9-1.7-4.5-1.1-5.8 1.9C132.5 27 124.6 32 117.5 32s-15-5-17.5-11.1c-.7-1.6-2-2.9-2.9-2.8-.9 0-8.6 3-17.1 6.5zm64.7 10c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM125 67c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm25.5 6c.3.5.1 1-.4 1-.6 0-1.1-.5-1.1-1 0-.6.2-1 .4-1 .3 0 .8.4 1.1 1zm17.5 1c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm-38.5 1c.3.5.2 1-.4 1-.5 0-1.3-.5-1.6-1-.3-.6-.2-1 .4-1 .5 0 1.3.4 1.6 1zm64.8 2.7c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zM171 79c0 .5-.2 1-.4 1-.3 0-.8-.5-1.1-1-.3-.6-.1-1 .4-1 .6 0 1.1.4 1.1 1zm-35.3 4.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zM219 115c0 .5-.2 1-.4 1-.3 0-.8-.5-1.1-1-.3-.6-.1-1 .4-1 .6 0 1.1.4 1.1 1zm-11.7 16.5c-.3.8-1 1.5-1.5 1.5-.7 0-.6-.5.1-1.3.6-.8.7-1.8.3-2.2-.4-.5-.2-.5.5-.1s1 1.3.6 2.1zm10.4-.9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-5.4 1.1c-.7.2-1.3 1.1-1.3 1.9 0 .9-.4 1.3-1 .9-1.4-.9 0-3.5 1.9-3.4 1 0 1.1.2.4.6zm.1 6.7c1.1-.4 1.5 2.1.7 4.6-.3 1.1-3.1-3.5-3-4.9 0-1 .2-1.1.5-.4.3.7 1.1 1 1.8.7zM254.1 70.9c-.7.5-1.1 15.4-1.1 51.6-.1 47.2.1 51.1 1.7 52.2 1.6 1.2 1.6 1.3 0 1.3s-1.7 2.7-1.6 35.8c0 19.7-.1 36.4-.3 37.2-.5 2.4 34.6 2.6 47.2.4 14.5-2.6 25-8.3 30.5-16.5 2.1-3.2 2.4-4.3 1.4-5.5-1.1-1.4-1-1.5 1.3-1.8 3-.3 4.2-7.8 4.3-26.1 0-16.5-.2-18.4-2.2-22.8-3-6.4-7.3-11.7-12.2-15.2-2.3-1.5-4.1-3.1-4.1-3.6 0-.4 1.5-1.5 3.3-2.4 5.4-2.5 10.5-8.6 12.9-15 1.9-5.3 2.2-8.1 2.2-23.5.1-15.1-.2-18.2-1.9-22.9-3.8-10.2-11.9-17-25.2-21.1-5.6-1.7-9.3-2-25.7-2-10.5 0-21.4-.2-24.2-.4-2.8-.2-5.6-.1-6.3.3zm16.9 9.5c0 .2-.7.7-1.6 1-.8.3-1.2.2-.9-.4.6-1 2.5-1.4 2.5-.6zm21 0c0 1.1-1.9 1.5-2.5.6-.3-.5.1-1 .9-1 .9 0 1.6.2 1.6.4zm4.1 5.7c1.9 1.6 2 1.8.4 1-3.4-1.7-5.1-3.1-3.9-3.1.7 0 2.2.9 3.5 2.1zM276 87.9c0 .6-.9.9-1.9.8-1.1 0-1.7-.5-1.5-.9.7-1.1 3.4-1 3.4.1zm5 2.5c0 .2-.7.6-1.5 1-.8.3-1.5.1-1.5-.4 0-.6.7-1 1.5-1s1.5.2 1.5.4zm-14 1c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm32 1c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm-39.3 4c-.8 1-1.4 1.1-1.9.3-.4-.6-.2-1.5.5-1.9 1.7-1.1 2.8.1 1.4 1.6zm37.3.6c.3.4 2 1 3.9 1.6 6.3 1.7 7.6 4.9 7.9 19.1.5 15.7-.1 18.4-4.2 22.8l-3.3 3.5H283V98h4c2.2 0 4-.4 4-1 0-1 5.1-1 6 0zm-19.5 5.1c-1 1.5-2.5 1-1.9-.6.4-.8 1-1.2 1.5-.9.5.3.7 1 .4 1.5zm-14.5 2c-1.4 2.6-1.8 2.4-1.2-.6.2-1.4.8-2.2 1.3-1.9.5.3.5 1.4-.1 2.5zm-3-.1c0 .5-.2 1-.4 1-.3 0-.8-.5-1.1-1-.3-.6-.1-1 .4-1 .6 0 1.1.4 1.1 1zm7 0c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-2 10.5c-3.1 1.8-4 1.8-4 .2 0-.7 1.4-1.3 3.3-1.4l3.2-.2-2.5 1.4zm2.5 2.5c-.3.5-1.3 1-2.1 1s-1.2-.5-.9-1c.3-.6 1.3-1 2.1-1s1.2.4.9 1zm-5.5 3c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm3 1c0 .5-.2 1-.4 1-.3 0-.8-.5-1.1-1-.3-.6-.1-1 .4-1 .6 0 1.1.4 1.1 1zm9.5 0c.3.5-.1 1-.9 1-.9 0-1.6-.5-1.6-1 0-.6.4-1 .9-1 .6 0 1.3.4 1.6 1zm-5.5 3.6c0 .8-.7 1.4-1.5 1.4-1.7 0-1.8-.2-.9-2.4.7-1.8 2.4-1.2 2.4 1zm6 .4c1.2.7 1 .9-.8.7-1.2 0-2.2-.5-2.2-.9 0-1.1 1.2-1 3 .2zm-1 5.6c0 .8-1.9 1.3-2.4.6-.3-.5.1-.9.9-.9s1.5.2 1.5.3zm26.9 44.2c6.7 3.3 7.6 5.7 7.7 20.5.2 15.1-.7 19.5-4.8 23.4-2.8 2.7-3.4 2.8-12.1 2.8h-9.2l-.3-23c-.1-12.6 0-23.5.2-24.2.8-2 14.3-1.7 18.5.5zM270 206c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm4 .5c0 .1-.7.8-1.5 1.5-1.3 1-1.5.9-1.5-.8 0-1.5.5-2 1.5-1.6.8.4 1.5.7 1.5.9zm-12 8.5c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zM725 70.9c0 .6.6 1.1 1.3 1.2.6 0 0 .5-1.5 1.1l-2.8 1 .3 87.6.2 87.7h25c23.9 0 25.3-.1 31.3-2.4 11.5-4.4 20.1-14.8 23.7-28.7 2.1-8.4 2.7-105.9.6-114.9-3.3-14.8-10-24.3-21.3-30.2l-5.3-2.8-25.7-.3c-17.9-.3-25.8 0-25.8.7zm39.2 26c2.4.1 5.6 3.7 8.2 9.1 2.1 4.4 2.1 5.5 1.9 51.2-.1 51.7-.4 54.6-5.8 60.3-3.1 3.4-3.5 3.5-10.5 3.5h-7.2l.4-61.6c.3-45.8.8-61.8 1.6-62.3.7-.4 3.1-.6 5.5-.5 2.3.2 5 .3 5.9.3zM738 124.2c0 1.5-1.8 1.7-3 .3-.9-1.1-.8-1.4.9-1.2 1.2.1 2.1.5 2.1.9zm-2 22.8c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm-4.5 3c.3.5.1 1-.4 1-.6 0-1.1-.5-1.1-1 0-.6.2-1 .4-1 .3 0 .8.4 1.1 1zM858 71.1c-15.3 2.2-25.2 9.6-30.2 22.5-4.7 12.3-5 16.2-4.6 71.9l.4 52 2.7 8c1.4 4.4 3.8 9.7 5.2 11.7 7 10.3 24 15.3 42.7 12.8 18.1-2.5 27.1-11.7 31.5-32 1.6-7.6 1.8-13.9 1.8-59 0-46.5-.2-51.1-1.9-57.5-2.6-9.6-6-15.9-11-20.9-9.3-8.9-20.6-11.9-36.6-9.5zm13.4 28.3c6.9 2.9 6.6.2 6.6 59.4 0 57.8 0 57.7-5.5 62-2 1.6-4.2 2.2-7.6 2.2-6 0-9.6-2.8-10.9-8.5-.6-2.3-.9-25.9-.7-55 .2-47 .3-51.3 2-54.7 3-6 9.5-8.2 16.1-5.4zM351 159.4c0 48.6.3 89.1.6 90 .5 1.4 2.8 1.6 15.5 1.6H382l-.2-37.8-.3-37.7 6.2-.3c8.2-.4 12.4 1.4 14.9 6.4 1.7 3.6 1.9 6.7 2.2 36.6l.3 32.8H434v-6.8c.2-37.2-.1-59.3-.9-62-1.6-5.4-5.5-11.3-11.2-17.1-5-4.9-5.3-5.4-3.5-6.5 11.7-7 15.2-11.8 17.7-24.5 2-10.2 1.8-32.5-.4-38.6-4.1-11.6-12.5-19.2-24.6-22.3-6.5-1.7-11.5-2-33.8-2.1l-26.3-.2v88.5zm51.7-57.8c4 3.1 5.4 9.2 4.8 22.6-.4 11.7-1.6 15.9-5.6 19.3-2.7 2.2-3.9 2.5-11.5 2.5H382v-23.4c0-15.5.4-23.6 1.1-23.8.5-.2 4.5-.2 8.7 0 6.2.3 8.3.9 10.9 2.8zM458.3 160.8l.2 89.7 18.4.5c10.2.3 25.7.4 34.7.2l16.1-.3.5-10.2c.2-5.6.2-12.1 0-14.4l-.4-4.3-19.7-.2-19.6-.3v-46l17.8-.3 17.7-.2v-28l-17.2-.2-17.3-.3-.3-23.8L489 99l2.2-.2c1.3-.1 10.2-.2 19.8-.2l17.5-.1v-27l-35.2-.2L458 71l.3 89.8zM517 75.4c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm3.7 19.2c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM543 72.6c0 1.1 8.2 42.5 33 167.4 2.1 10.5 2 10.5 14.3 10.8 10.3.3 10.7.2 11.6-2 .5-1.3 2.8-11.1 5.1-21.8 2.2-10.7 4.5-21.1 5.1-23 .5-1.9 1.8-8.2 2.9-14 1.1-5.8 3.3-17 5.1-25 1.7-8 3.2-15.4 3.4-16.5.2-1.1.4-2.2.5-2.5.1-.3.2-.8.1-1.3 0-.4.2-.7.7-.7.4 0 5.4 23.5 11.1 52.2 5.7 28.8 10.9 52.9 11.4 53.6.7.9 4.1 1.2 12.5 1l11.5-.3 1.3-6c.7-3.3 2-9.4 2.9-13.5 1.7-8.1 2.4-10.9 5.4-24 1.1-4.7 2.3-9.6 2.5-11 .3-1.4.7-3.4 1-4.5.3-1.1 2.1-9.2 4-18s5.1-23.2 7.1-32c1.9-8.8 4.7-21.6 6.1-28.5 1.4-6.9 3.5-16.6 4.5-21.5 2.4-11.5 3.9-18.7 3.9-19.1 0-.2-6.3-.4-13.9-.4-12.3 0-14 .2-14.6 1.7-.3 1-5.3 25.1-11 53.7-5.7 28.5-10.6 52.1-10.9 52.3-.8.8-3.2-12.6-8.6-49.2-1.7-11.6-4.5-28.2-6.1-37.1-1.6-8.9-2.9-17.3-2.9-18.8V72h-14.9c-13.4 0-15 .2-15.5 1.7-1.3 4.5-16.9 86.1-19.3 101.7-.8 4.6-3.3 7.9-3.1 3.9.1-1.7-1.4-11.1-4.8-30.8-.8-5-2.2-12.6-2.9-17-.8-4.4-2.3-13.2-3.4-19.5-1.2-6.3-2.3-13.1-2.6-15-1.7-12.4-2.8-17.8-4-20.3-.8-1.7-1-2.7-.3-2.7.6 0 .6-.6-.2-1.5-1.7-2-28-2-28 .1zM554 97c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zM957.2 72.1c-15.2 3-25.8 13.3-30.2 29.1-1.9 6.9-2 10.3-2 61.8 0 56.7.1 58.3 4.4 68.5 2.4 5.6 9 12.1 16.1 15.8 5.8 3 6.4 3.1 18.5 3.1 13.8 0 17.1-.9 23.5-6.5 2-1.8 3.8-2.9 4.1-2.6.3.3.5 2.3.6 4.6 0 3.5.4 4.2 2.4 4.7 2.1.5 11.2-.1 12-.8.1-.2.4-21 .6-46.3l.3-46-19.8-.3-19.7-.2v28h10.1l-.3 16.6-.3 16.6-3.3 2.9c-4.1 3.7-8.9 3.9-12.9.5-5.4-4.5-5.5-5.6-5.1-61.6.3-49.1.4-51.7 2.3-55.5 1.5-3.1 3-4.3 6.1-5.4 3.7-1.3 4.4-1.2 8 .5 5.7 2.8 6.7 5.7 6.9 20.9l.2 13h27.8l.3-9c.3-10-1.2-24.1-2.9-26.1-.6-.7-.8-1.7-.5-2.2 1.1-1.8-4.3-10.9-9-15-6.1-5.4-6.1-5.4-10.8-7.6-4.5-2.1-20.1-3-27.4-1.5zM950 117c0 1.3-.1 1.3-1 0-.5-.8-1-2.2-1-3 0-1.3.1-1.3 1 0 .5.8 1 2.2 1 3zm44-2c0 .5-.2 1-.4 1-.3 0-.8-.5-1.1-1-.3-.6-.1-1 .4-1 .6 0 1.1.4 1.1 1zm-1.3 7.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9z" />
      <path d="M171 122.3c-3 1.5-3.9 5.4-1.5 6.3 2.3.9 4.7-1.8 4.3-4.9-.3-2.5-.5-2.6-2.8-1.4zM214 134c0 .5.5 1 1.1 1 .5 0 .7-.5.4-1-.3-.6-.8-1-1.1-1-.2 0-.4.4-.4 1zM99.5 190.5C80.7 193.2 43 205 43 208.2c0 1.1 1.8 4.6 3.2 6.2 1.5 1.8 9.7 13.9 11.6 17.1 3 5.2 20.5 22 27.9 26.9 9 5.8 20.5 11.9 26.7 14 4.6 1.6 4.9 1.6 11.4-1 3.7-1.5 7.4-3.2 8.2-4 .8-.7 2.8-1.7 4.3-2.3 9-3.5 31.2-22.6 40.2-34.6 1.6-2.2 3.2-4.2 3.5-4.5 1.2-1.1 12.2-18.1 11.9-18.3-2.2-1.3-32.6-11.7-39.9-13.6-16.9-4.6-36.4-5.9-52.5-3.6z" />
    </g>
  </svg>
);

BrewdogLogo.propTypes = {
  color: string,
  width: string,
  height: string,
};

BrewdogLogo.defaultProps = {
  color: '#000',
  width: '28',
  height: '28',
};

export default BrewdogLogo;
