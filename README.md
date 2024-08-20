## an-example-react-package-built-with-nextjs-tooling

This is an example React component library, built using the NextJS tooling. 


Usage: 

```
import {MyComponent } from "an-example-react-package-built-with-nextjs-tooling";
import {MyClientComponent} from "an-example-react-package-built-with-nextjs-tooling/dist/export-client";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <MyComponent/>
          <MyClientComponent/>
      </div>
    </main>
  );
}


```

