import styles from './PageHeader.module.css';

export default function PageHeader({ tag, title, sub, bgWord }) {
  return (
    <div className={styles.header} data-bg={bgWord || ''}>
      {tag && <div className={styles.tag}>{tag}</div>}
      <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  );
}
