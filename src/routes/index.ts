import { About } from "../views/about/About";
import { Contact } from "../views/contact/Contact";
import { Home } from "../views/home/Home";

//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes = [
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
];

//将路由表数组导出
export default routes;
