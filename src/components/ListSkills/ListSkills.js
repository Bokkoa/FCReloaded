import React from 'react'
import loadable from '@loadable/component';
import './ListSkills.scss';
// import SkillBar from 'react-skills-bars';
// wait for window component
const SkillBar = loadable( () => import("react-skills-bars") );

const ListSkills = ({skills, colors}) => {
    return (
        <div className="list-skills">
            <SkillBar skills={skills} colors={colors} />
        </div>
    )
}


export default ListSkills
