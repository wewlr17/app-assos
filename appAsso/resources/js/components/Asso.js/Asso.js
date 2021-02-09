import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Asso = ({ posts }) => {
    let { id } = useParams();
    return (
        <div className="container asso-posts">
            <div className="list-group">
                {postsState.map((post) => {
                    if (id == post.assos_id) {
                        return (
                            <Link
                                to={"/" + post.id}
                                key={post.id}
                                className="list-group-item list-group-item-action active mb-3"
                                aria-current="true"
                            >
                                <img
                                    src={post.image}
                                    className="rounded float-start"
                                    alt="..."
                                ></img>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{post.title}</h5>
                                    <small>{post.created_at}</small>
                                </div>
                                <p className="mb-1">{post.description}</p>
                                <small>{post.type}</small>
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Asso;