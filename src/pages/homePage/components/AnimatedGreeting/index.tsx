import styles from './styles.scss';
import { motion } from 'framer-motion';

export default function AnimatedGreeting() {
  return (
    <motion.h1
      className={styles.greetingText}
      initial={{ y: -200 }}
      animate={{ y: 0 }}
    >
      Welcome!
    </motion.h1>
  );
}
