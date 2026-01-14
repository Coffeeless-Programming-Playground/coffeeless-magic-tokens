# Coffeeless Magic Tokens

Coffeeless Magic Tokens provides React components that can be used as widgets
for streaming text like the output of streaming LLM responses.

The package is divided into css, components, hooks and themes.

The `MagicTokensGlowWidget` allows for the display streaming text chunks.
The chunks have a glow effect as they are rendered.
This component depends on two hooks `useGlowGeneration` which handles the
animation and insertion of the chunks and `useContentExpansion` for handling
text overflow in the widget.

The `MagicTokensGlowWidget` accepts the following customizable props:
- textAnimationContainerRef: React.Ref<HTMLDivElement>;
- textColor?: string;
- glowColor?: string;
- fadeDuration?: number;
- title?: string;
- footer?: string;
- footerColor?: string;
- innerBackgroundColor?: string;
- innerBorderColor: string;
- innerBoxShadowInsetColor?: string;
- innerBoxShadowInsetBlur?: string;
- innerBoxShadowInsetSpread?: string;
- innerBoxShadowOutsetColor?: string;
- innerBoxShadowOutsetBlur?: string;
- innerBoxShadowOutsetSpread?: string;
- textFontSize?: string;
- textFontFamily?: string;
- expandButtonBackground?: string;
- expandButtonColor?: string;
- gradientStartColor?: string;
- gradientEndColor?: string;
- expanded: boolean;
- overflowing: boolean;
- maxHeight: number | 'auto';
- onToggleExpansion(): void;

This package also includes two theme variants for the color props:
- `DarkThemeProps`
- `LightThemeProps`

These themes contain the following color string props for the `MagicTokensGlowWidget`:
- `TEXT_COLOR`
- `GLOW_COLOR`
- `FOOTER_COLOR`
- `INNER_BACKGROUND`
- `INNER_BORDER_COLOR`
- `INNER_BOX_SHADOW_INSET`
- `INNER_BOX_SHADOW_OUTSET`
- `EXPAND_BUTTON_BACKGROUND`
- `EXPAND_BUTTON_COLOR`
- `GRADIENT_START_COLOR`
- `GRADIENT_END_COLOR`
