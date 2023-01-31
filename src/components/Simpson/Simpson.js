const Simpson = (props) => {
const {simpson} = props;
    return (
        <div>
            <di>name:{simpson.name}</di>
            <div>surname:{simpson.surname}</div>
            <img src={simpson.image} alt={simpson.name}/>
        </div>
    );
};
export {Simpson};