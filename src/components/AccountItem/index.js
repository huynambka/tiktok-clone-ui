import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_100x100.jpeg?x-expires=1676998800&x-signature=oJD0h5%2BJTbf2tPBGmvG%2BhVp9zAU%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Huy Nam</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenhuynam</span>
            </div>
        </div>
    );
}

export default AccountItem;
