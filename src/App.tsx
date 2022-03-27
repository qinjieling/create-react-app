import "./App.less";
import styles from "./global.less";
import { BasicLayout } from "./layouts/BasicLayout";

function App() {
  return (
    <div className={styles.flex}>
      <BasicLayout />
    </div>
  );
}

export default App;
