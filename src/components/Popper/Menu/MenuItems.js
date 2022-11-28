import Button from '~/components/Button';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        sparate: data.sparate,
    });
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
