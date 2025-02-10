import { defaultConfig } from "./common";

export const graphic = {
  show: true,
  type: 'text',
  left: 'center',
  top: 'center',
  rotation: Math.PI * (0 / 180),
  style: {
    text: defaultConfig.GraphicText,
    fill: 'rgba(0, 0, 0, 0.9)', // 设置透明度
    font: 'bold 30px Microsoft YaHei',
    opacity: 0.4,
    fontSize: 60,
  },
  z: 1000,
}
