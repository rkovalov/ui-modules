import { isDark } from '../../utils/colors';
import styles from './color-palette.module.css';
interface ColorPaletteProps {
  title: string;
  colors: {
    shade?: string;
    hex?: string;
    token?: string;
  }[];
}
export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, title }) => {
  return (
    <div className={styles.colorPalette}>
      <h2>{title}</h2>
      <div className={styles.colorList}>
        {colors.map(({ shade, hex, token }) => (
          <div key={shade} className={styles.colorItem} style={{ backgroundColor: hex }}>
            <div
              className={styles.colorInfo}
              style={{ color: isDark(hex && hex.length > 2 ? hex : '#ffffff') ? 'white' : 'black' }}
            >
              <div className={styles.colorHex}>{hex}</div>
              <div className={styles.colorShade}>Shade: {shade}</div>
              <div className={styles.colorToken}>{token}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
