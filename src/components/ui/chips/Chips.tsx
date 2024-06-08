type Props = {
  text: string;
  icon?: string;
};

export const Chips = ({ icon, text }: Props) => {
  return (
    <div className="chips">
      {icon && <img className="chips__icon" src={icon} alt="Иконки" />}
      <span className="chips__text">{text}</span>
    </div>
  );
};
