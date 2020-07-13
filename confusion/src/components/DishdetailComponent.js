import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


    function RenderComments({comments}) {
        if (comments != null && comments.length > 0) {
            const comment_list = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                        {comment_list} 
                        </ul>
                    </div>
                </div>
            );
        } else {

        }
    }

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
        );
    }

    const DishDetail = (props) => {
        const dish = props.dish;

        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={dish} />
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            );    
        } else {
            return (
                <div></div>
            );
        }
    }
    
export default DishDetail;