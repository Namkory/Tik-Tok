import { Link } from 'react-router-dom';
import styles from './AcountItem.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}> {data.nickname} </span>
            </div>
        </Link>
    );
}

export default AccountItem;
