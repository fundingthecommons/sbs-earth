import * as React from 'react';
import { Section } from '../section';
import { Content } from '../content';
import { hasWord, getWordWith } from '../../helpers/utilities';

const imageWrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
}
const imageWrapClasses = (style) => {
  const isVertical: boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isVerticalMobile: boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
  const widthClasses = imageWrapWidthClasses(isVertical, false)
  const mobileWidthClasses = imageWrapWidthClasses(isVerticalMobile, true)
  return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
}

export const Hero = ({ data, parentField = '' }) => {
  const style = data.style
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div className={`relative ${imageWrapClasses(style)}`}>
          <div className="w-full" style={{ aspectRatio: "16/9" }}>
            <div className="w-full h-full pointer-events-none">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${data.videoId}?rel=0&autoplay=1&mute=1&loop=1&controls=0&modestbranding`}
                title="YouTube video player"
                frame-border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allow-fullscreen
              ></iframe>
            </div>
          </div>
          <a className="btn-primary shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" href={data.liveLink} target="_blank">Join Live</a>
        </div>
        <div className={`flex-none ${style.featureContent}`}>
          <Content
            data={data}
            styles={style}
            alignment={`${textAlign} ${textAlignMobile}`}
            buttonsLayout={style.buttonsLayout}
            width="w-full"
            parentField={parentField}
            className=""
          />
        </div>
      </div>
    </Section>
  );
};
