import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col,Button } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

import {Link } from "react-router-dom";
const mButton = {
  display: "block",
  margin: "72px auto 0",
  background:" rgb(3, 67, 101)",
  background: "-moz-linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
  background: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
  boxShadow: "1px 5px 5px #260303",
  border: "none",
  transition:" background .45s @ease-out",
  width: "132px",
  lineHeight: "42px",
  height: "42px",
  borderRadius: "42px",
};

class Content3 extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    let clearFloatNum = 0;
    const children = dataSource.block.children.map((item, i) => {
      const childObj = item.children;
      const delay = isMobile ? i * 50 : this.getDelay(i, 24 / item.md);
      const liAnim = {
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
        delay,
      };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 };
      clearFloatNum += item.md;
      clearFloatNum = clearFloatNum > 24 ? 0 : clearFloatNum;
      return (
        <TweenOne
          component={Col}
          animation={liAnim}
          key={item.name}
          {...item}
          
          componentProps={{ md: item.md, xs: item.xs }}
          className={
            !clearFloatNum
              ? `${item.className || ''} clear-both`.trim()
              : item.className
          }
        >
        
          <div {...childObj.textWrapper}>
            <TweenOne
              key="h2"
              animation={childrenAnim}
              component="h5"
              {...childObj.title}
            >
              {childObj.title.children}
            </TweenOne>
            <br/><br/>
            <TweenOne
              key="p"
              animation={{ ...childrenAnim, delay: delay + 200 }}
              component="div"
              {...childObj.content}
            >
              {childObj.content.children}
            </TweenOne>
          </div>
        </TweenOne>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <h5 {...dataSource.titleWrapper}>
           <u><b>{dataSource.titleWrapper.children.map(getChildrenToRender)}</b></u> 
          </h5>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim key="u" type="bottom">
              <Row key="row" {...dataSource.block}>
                {children}
              </Row>
              <Link to="/Past events">
              <Button style={mButton} type="primary"> Browse
                </Button>
              </Link>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content3;
