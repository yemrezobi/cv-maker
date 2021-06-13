/*import React from "react";
import BookList from "./bookCreate";

class BookView extends React.Component {
    state = {
        bookDetails: [
            {
                index: Math.random(),
                name: "",
                author: "",
                type: "",
                dateOfPublish: "",
                price: ""
            }
        ]
    };
    handleChange = e => {
        if (
            ["name", "author", "type", "dateOfPublish", "price"].includes(
                e.target.name
            )
        ) {
            let bookDetails = [...this.state.bookDetails];
            bookDetails[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };
    addNewRow = e => {
        this.setState(prevState => ({
            bookDetails: [
                ...prevState.bookDetails,
                {
                    index: Math.random(),
                    name: "",
                    author: "",
                    type: "",
                    dateOfPublish: "",
                    price: ""
                }
            ]
        }));
    };

    deteteRow = index => {
        this.setState({
            bookDetails: this.state.bookDetails.filter(
                (s, sindex) => index !== sindex
            )
        });
    };

    clickOnDelete(record) {
        this.setState({
            bookDetails: this.state.bookDetails.filter(r => r !== record)
        });
    }
    render() {
        let { bookDetails } = this.state;
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1" />
                        <div className="col-sm-10">
                            <h2 className="text-center"> Enter Book Details</h2>
                            <div className="container">
                                <div className="row">
                                    <BookList
                                        add={this.addNewRow}
                                        delete={this.clickOnDelete.bind(this)}
                                        bookDetails={bookDetails}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </form>
            </div>
        );
    }
}
export default BookView;
*/