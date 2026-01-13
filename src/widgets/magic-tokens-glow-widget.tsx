const { version } = require('../../package.json')

interface MagicTokensGlowWidgetProps {
  textAnimationContainerRef: React.Ref<HTMLDivElement>;
  textColor?: string;
  glowColor?: string;
  fadeDuration?: number;
  title?: string;
  footer?: string;
  footerColor?: string;
  innerBackgroundColor?: string;
  innerBorderColor: string;
  innerBoxShadowInsetColor?: string;
  innerBoxShadowInsetBlur?: string;
  innerBoxShadowInsetSpread?: string;
  innerBoxShadowOutsetColor?: string;
  innerBoxShadowOutsetBlur?: string;
  innerBoxShadowOutsetSpread?: string;
  textFontSize?: string;
  textFontFamily?: string;
  expandButtonBackground?: string;
  expandButtonColor?: string;
  expandButtonBorderColor?: string;
  gradientStartColor?: string;
  gradientEndColor?: string;
  expanded: boolean;
  overflowing: boolean;
  maxHeight: number | 'auto';
  onToggleExpansion(): void;
}

const MagicTokensGlowWidget: React.FC<MagicTokensGlowWidgetProps> = ({
  textAnimationContainerRef,
  textColor = '#ffffff',
  glowColor = 'rgba(151, 0, 255, 0.5)',
  fadeDuration = 1,
  title = 'AI Generated Summary',
  footer = 'Powered By Coffeeless AI',
  footerColor = '#666',
  innerBackgroundColor = '#151e25',
  innerBorderColor = '#CCC',
  innerBoxShadowInsetColor = 'rgba(151, 0, 255, 0.5)',
  innerBoxShadowInsetBlur = '5px',
  innerBoxShadowInsetSpread = '1px',
  innerBoxShadowOutsetColor = 'rgba(255, 255, 255, 0.13)',
  innerBoxShadowOutsetBlur = '10px',
  innerBoxShadowOutsetSpread = '1px',
  textFontSize = '16px',
  textFontFamily = 'monospace',
  expandButtonBackground = '#CCC',
  expandButtonColor = 'rgba(151, 0, 255, 0.5)',
  expandButtonBorderColor = 'rgba(151, 0, 255, 0.5)',
  gradientStartColor = 'rgba(0, 0, 0, 0)',
  gradientEndColor = 'rgba(0, 0, 0, 0.9)',
  expanded,
  overflowing,
  maxHeight,
  onToggleExpansion
}) => {
  
  return (
    <div className="magic-tokens-widget-container">
      <style>
        {`
        .glowing-chunk {
          animation: glowing-chunk ${fadeDuration}s ease-in alternate;
          z-index: 1;
        }

        @keyframes glowing-chunk {
          from {
            text-shadow:
              0 0 10px #fff,
              0 0 15px ${glowColor},
              0 0 20px ${glowColor},
              0 0 25px ${glowColor},
              0 0 30px ${glowColor};
            color: #fff;
          }
          to {
            text-shadow: none;
            color: ${textColor};
          }
        }

        .magic-tokens-widget-text-overflow::after {
          background: linear-gradient(
            to bottom,
            ${gradientStartColor},
            ${gradientEndColor}
          );
        }
        `}
      </style>
      <div
        className="magic-tokens-widget-inner"
        style={{
          backgroundColor: innerBackgroundColor,
          borderColor: innerBorderColor,
          boxShadow:
            `0 0 ${innerBoxShadowOutsetBlur} ${innerBoxShadowOutsetSpread} ${innerBoxShadowOutsetColor}, ` + 
            `inset 0 0 ${innerBoxShadowInsetBlur} ${innerBoxShadowInsetSpread} ${innerBoxShadowInsetColor}`
        }}
      >
        <p className='magic-tokens-widget-title'>{title}</p>
        <div
          ref={textAnimationContainerRef}
          className="magic-tokens-widget-text"
          data-expanded={expanded}
          style={{
            color: textColor,
            fontSize: textFontSize,
            fontFamily: textFontFamily,
            maxHeight,
            overflow: 'hidden'
          }}
        >
          {overflowing && (
            <button
              className='expand-btn'
              onClick={onToggleExpansion}
              aria-expanded={expanded}
              style={{
                backgroundColor: expandButtonBackground,
                color: expandButtonColor
              }}
            >
              {expanded ? 'Collapse' : 'Expand'}
            </button>
          )}
        </div>
        <small
          className='magic-tokens-widget-footer'
          style={{
            color: footerColor
          }}
          >
          Coffeeless Magic Tokens v{version} {footer}
        </small>
      </div>
    </div>
  );
};

export default MagicTokensGlowWidget;
