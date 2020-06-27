import Link from 'next/link';
import Head from 'next/head';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'This is the default title' } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navbar />
        <Sidebar />

        {children}
      </div>
    );
  }
}
