import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        qdev was designed from the ground up to be easily installed used to quickly setup your developer environment
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        qdev has simple configuration and easy to remember command names to let you focus on setting things up quickly
      </>
    ),
  },
  {
    title: 'Powered by Javascript',
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        placeholder text
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
