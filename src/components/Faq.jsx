import Faq from "react-faq-component";

const styles = {
    bgColor: "whitepearl",
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,    
    openOnload: 0,
    tabFocus: true,
};

export default function App(props) {

    return (
        <div>
            <Faq
                data={props.data}
                styles={styles}
                config={config}
            />
        </div>
    );
}