import { StyleSheet } from 'react-native';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const FlatListStyles = theme => StyleSheet.create({ List: { flex: 1 } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });
