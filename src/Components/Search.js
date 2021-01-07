import React, {Component} from 'react';
import './search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {

    state = {
        searchBox: "search-box ",
        searchInput: "search-input ",
        searchIcon: "search-icon ",
        cancelIcon: "cancel-icon "
    }

    onSearch = () => {
        this.setState( (prevState) => {
            return {
                searchBox: prevState.searchBox+"active ",
                searchIcon: prevState.searchIcon+"active ",
                cancelIcon: prevState.cancelIcon+"active ",
                searchInput: prevState.searchInput+"active "
            }
        } )
    }

    onCancel = () => {
        this.setState( () => {
            return {
                searchBox: "search-box ",
                searchInput: "search-input ",
                searchIcon: "search-icon ",
                cancelIcon: "cancel-icon "
            }
        } )
    }

    render() {

        const {searchBox, searchInput, searchIcon, cancelIcon} = this.state;
        const {onSearch, onCancel} = this;

        return (

            <div className={searchBox}>
                <input className={searchInput} type={'search'} placeholder={"Search..."}/>
                <div className={searchIcon} onClick={onSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={cancelIcon} onClick={onCancel}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
        )
    }

}