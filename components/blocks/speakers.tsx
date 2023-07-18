import { forwardRef } from 'react';
import { hasWord } from '../../helpers/utilities';
import { FaIcon } from '../icons/fa-icon';
import { Section } from '../section';
import { Content } from '../content';
import { Tween, Reveal } from 'react-gsap';

const wrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
}

const wrapClasses = (style) => {
  const isVertical: boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isVerticalMobile: boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
  const widthClasses = wrapWidthClasses(isVertical, false)
  const mobileWidthClasses = wrapWidthClasses(isVerticalMobile, true)
  return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
}

const cardImgStyles = (cardStyle, isMobile: boolean) => {
  const classes: [string] = cardStyle?.image?.split(' ') || []
  let imageWidth
  let imageHeight
  if (isMobile) {
    imageWidth = classes.find(item => item.substring(0, 7) === 'sm:wpx-')?.replace(`sm:wpx-`, '')
    imageHeight = classes.find(item => item.substring(0, 7) === 'sm:hpx-')?.replace(`sm:wpx-`, '')
  } else {
    imageWidth = classes.find(item => item.substring(0, 4) === 'wpx-')?.replace(`wpx-`, '')
    imageHeight = classes.find(item => item.substring(0, 4) === 'hpx-')?.replace(`hpx-`, '')
  }
  return {
    width: imageWidth ? `${imageWidth}px` : '100%',
    height: imageHeight ? `${imageHeight}px` : '100%'
  }
}

const cardImgClasses = (cardStyle, isMobile: boolean) => {
  const classes: [string] = cardStyle?.image?.split(' ') || []
  if (isMobile) {
    return classes.filter(item => item.includes('sm:object-')).join(' ')
  } else {
    return classes.filter(item => item.includes('object-')).join(' ')
  }
}
interface SpeakerProps {
  data: any;
  cardstyle: any;
  index: number;
  parentField?: string;
}

// export const Speaker = forwardRef<HTMLDivElement, SpeakerProps>(({ data, cardstyle, index, parentField = "" }, ref) => (
//   <div ref={ref} className={`relative w-full flex py-7 ${cardstyle?.alignment}`} data-tinafield={`${parentField}.${index}`}>
//     <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
//     {data.image?.src && (
//       <div className="w-full px-4">
//         <div className="relative mx-auto w-full" style={{ maxWidth: "160px" }}>
//           <div className="rounded-full bg-accent2" style={{ paddingBottom: "100%" }}></div>
//           <img
//             className={`absolute top-0 left-0 w-full h-full rounded-full p-1 object-cover`}
//             alt={data.image.alt || data.headline}
//             src={data.image.src}
//             data-tinafield={`${parentField}.image`}
//           />
//         </div>
//       </div>
//     )}
//     <div className="flex-1 h-full flex flex-col mt-6 px-4" >
//       <Content
//         data={data}
//         alignment={``}
//         buttonsLayout={cardstyle.buttonsLayout}
//         styles={cardstyle}
//         width="w-full"
//         parentField={parentField}
//         className="h-full justify-between"
//       />
//     </div>
//   </div>
// ))

export const Speaker = forwardRef<HTMLDivElement, SpeakerProps>(({ data, cardstyle, index, parentField = "" }, ref) => (
  <div ref={ref} className={`relative w-full flex ${cardstyle?.alignment} ${cardstyle?.borderStyles}`} data-tinafield={`${parentField}.${index}`}>
    <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
    {data.link && !data.buttonLabel && (
      <a className={`absolute inset-0 -z-20`} href={data.link} />
    )}
    {data.image?.src && (
      <>
        <div className={`${cardstyle?.imagePadding} sm:hidden`}>
          <div style={cardImgStyles(cardstyle, false)}>
            <img
              className={`sm:hidden rounded-full border-4 border-accent2 ${cardImgClasses(cardstyle, false)}`}
              style={cardImgStyles(cardstyle, false)}
              alt={data.image.alt || data.headline}
              src={data.image.src}
              data-tinafield={`${parentField}.image`}
            />
          </div>
        </div>
        <div className={`${cardstyle?.imagePadding} hidden sm:block`}>
          <div style={cardImgStyles(cardstyle, true)}>
            <img
              className={`hidden sm:block  ${cardImgClasses(cardstyle, true)}`}
              style={cardImgStyles(cardstyle, true)}
              alt={data.image.alt || data.headline}
              src={data.image.src}
              data-tinafield={`${parentField}.image`}
            />
          </div>
        </div>
      </>
    )}
    <div className={`flex-1 h-full flex flex-col ${cardstyle.buttonLayout} ${cardstyle?.contentPadding}`} >
      <Content
        data={data}
        styles={cardstyle}
        alignment={``}
        buttonsLayout=""
        width="w-full"
        parentField={parentField}
        className=""
      />
      <div>
        {data.link && data.buttonLabel && (
          <a href={data.link} className={`btn-${cardstyle?.buttonType} ${cardstyle?.buttonWidth}`} data-tinafield={`${parentField}.${index}.link.0`}>
            <div className="flex items-center gap-2">
              <span>{data.buttonLabel}</span>
              {cardstyle?.buttonIcon && (
                <FaIcon icon={cardstyle.buttonIcon} />
              )}
            </div>
          </a>
        )}
      </div>
    </div>
  </div>
))

export const Speakers = ({ data, parentField = "" }) => {
  const style = data.style || {}
  const rowCount = Math.ceil(data.items.length / 4)
  const rows = []
  let i = 0
  while (++i <= rowCount) rows.push(i);


  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div id="speaker-cards" className={`${wrapClasses(style)}`}>
          <div className={`grid ${data.cardStyle.grid}`}>
            {rows.map((row) => (
              <Reveal>
                <Tween
                  from={{
                    opacity: 0,
                    y: 75,
                  }}
                  to={{
                    opacity: 1,
                    y: 0,
                  }}
                  stagger={0.2}
                  duration={1}
                >
                  {data.items.slice((row - 1) * 4, row * 4).map((block, index) => (
                    <Speaker key={index} index={index} data={block} cardstyle={data.cardStyle} parentField={`${parentField}.items`} />
                  ))}
                </Tween>
              </Reveal>
            ))}
          </div>
        </div>
        <div className={`flex-none justify-center`}>
          <Content
            data={data}
            styles={style}
            alignment={`text-center`}
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
