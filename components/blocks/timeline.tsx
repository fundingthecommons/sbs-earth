import React from "react";
import { hasWord, getWordWith } from '../../helpers/utilities';
import { Content } from "../content";
import { Section } from "../section";

const TimelineItem = ({ timeline, style,  isActive, index, parentField = ""  }) => {
  const activeClass = !isActive ? 'hidden sm:block' : ''
  return (
    <div className={`timeline mb-10 ${activeClass}`}>
      <h3 className={style?.headlineStyles}>{timeline.headline}</h3>
      <div className={style?.subheadStyles}>{timeline.subhead}</div>
      {timeline.events && (
        <div className="relative divide-gray-dark divide-y-1">
          { timeline.events.map(function (event, index) {
            return <div key={index} className="pt-2 pb-4">
              <div className="flex sm:block gap-8 text-white text-md font-bold">
                <div className={`${style?.labelStyles} relative w-20 text-left sm:inline-block`}>
                  {event.time}
                </div>
                <div className={style?.labelStyles}>{event.headline}</div>
              </div>
              <div className={`pl-28 sm:pl-0 ${style?.textStyles}`}>{event.subhead}</div>
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export const Timeline = ({ data, parentField = "" }) => {
  const style = data.style || {}
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')
  
  const wrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
    const mobilePrefix = isMobile ? 'sm:' : ''
    return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
  }
  const wrapClasses = (style) => {
    const isVertical:boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
    const isVerticalMobile:boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
    const widthClasses = wrapWidthClasses(isVertical, false)
    const mobileWidthClasses = wrapWidthClasses(isVerticalMobile, true)
    return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
  }

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        {data.timelines && (
          <div className={`${wrapClasses(style)}`}>
              <div className="absolute top-40 bottom-20 left-1/2 border-l-2 border-dashed hidden sm:block"></div>
              {data.timelines.map(function (timeline, index) {
                return (
                  <TimelineItem timeline={timeline} style={data.timelineStyle} isActive={true} index={index} key={index} />
                )
              })}
          </div>
        )}
        <div className={`flex-none justify-center ${style.featureContent}`}>
          <Content
            data = {data}
            styles = {data.style}
            alignment = {`${textAlign} ${textAlignMobile}`}
            width = "w-full"
            parentField = {parentField}
            className = ""
            buttonsLayout=""
          />
        </div>
      </div>
    </Section>
  );
};
