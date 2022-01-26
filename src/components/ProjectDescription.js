import React from 'react';

function ProjectDescription(props) {

    return (
        <p className="project_des">
            {
                props.attributes.project_type === "Article" ? props.attributes.project_description.substring(0, 300)+"..." : props.attributes.project_description + ""
            }
            <a className="project_see_more" href={props.attributes.project_url}>See More</a>
        </p>
    );
}

export {ProjectDescription};
