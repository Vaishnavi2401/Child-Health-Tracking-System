import './App.css';

export function AppFooter(props){
    return(
        <div class= 'App-footer'>
            <p><i>&copy; All Rights reserved under {props.company}-{props.year}</i></p>
        </div>
    )
}