import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// Init classnames
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;
