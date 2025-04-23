import style from "./Description.module.css";

const Description = ({ picture }) => {
  return (
    <div className={style.descriptionWrapper}>
      <p className={style.descriptionText}>
        Description:
        <span className={style.descriptionSpan}>{picture.alt_description}</span>
      </p>
      <p className={style.descriptionText}>
        Likes:
        <span className={style.descriptionSpan}>{picture.likes}</span>
      </p>
      <p className={style.descriptionText}>
        Author:
        <span className={style.descriptionSpan}>{picture.user.first_name}</span>
      </p>
    </div>
  );
};

export default Description;