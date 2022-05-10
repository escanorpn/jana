import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

import {Redirect,Link } from "react-router-dom";

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    const mButton = {
      display: "block",
      margin: "12px auto 0",
      background:" rgb(3, 67, 101)",
      background: "linear-gradient(315deg, #09141d 0%, #223343 74%)",
      // background: "-moz-linear-gradient(357deg, rgb(0 0 0) 0%, rgb(64 118 117) 94%)",
      // background:"linear-gradient(357deg, rgb(0 0 0) 0%, rgb(64 118 117) 94%)",
      // background: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
      boxShadow: "rgba(38, 3, 3, 0.36) 1px 5px 5px",
      border: "none",
      transition:" background .45s @ease-out",
      width: "132px",
      lineHeight: "42px",
      height: "42px",
      borderRadius: "42px",
    };
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    const children = dataSource.textWrapper.children.map((item) => {
      const { name, texty, ...$item } = item;
      if (name.match('button')) {
        return (
          <Link to="/contact">
          <Button  type="primary" key={name} {...$item}>
            {item.children}
          </Button>
          </Link>
        );
      }

      return (
        <div key={name} {...$item}>
          {texty ? (
            <Texty type="mask-bottom">{item.children}</Texty>
          ) : (
            item.children
          )}
        </div>
      );
    });
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <h3>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          style={{paddingTop:"13%",textShadow:"0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",color: "white",fontSize: "38px",lineHeight: "80px",textIndent: "2px",fontWeight: "600"}}
          {...dataSource.textWrapper}
        >
          {children}
        </QueueAnim>
        </h3>
      </div>
    );
  }
}
export default Banner;
