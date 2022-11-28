import className from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = className.bind(styles);

function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default wrapper;
