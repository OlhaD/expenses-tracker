import styles from './Card.module.scss';

const Card = (props) => {
    const classes = props.className;
    return (
        <div className={`${styles.card} ${classes}`}>
            {props.children}
        </div>
    )
}

export default Card;