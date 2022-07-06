import { motion } from 'framer-motion';

import styles from './styles.scss';

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
