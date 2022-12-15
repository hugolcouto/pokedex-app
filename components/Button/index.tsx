import style from "./style.module.scss";

interface Props {
    label: string;
}

export const Button = ({ label }: Props) => (
    <button className={style.button}>{label}</button>
);
