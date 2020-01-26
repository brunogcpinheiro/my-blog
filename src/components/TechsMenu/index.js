import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Icons from "./icons"
import links from "./content"

import * as S from "./styles"

const TechsMenu = () => {
  const [tabContents, setTabContents] = useState(
    [
      { id: "frontend", title: "Front-End", text: "Frontend message" },
      { id: "backend", title: "Back-End", text: "Backend message" },
      { id: "databases", title: "Databases", text: "Databases message" },
      { id: "devops", title: "DevOps", text: "DevOps message" },
    ]
  )

  return (
    <S.TechsWrapper>
      <Tabs className="react-tabs tabs">

        <TabList className="react-tabs__tab-list tab-list">
          {links.map(link => {
            const Icon = Icons[link.label]

            return (
              <Tab key={link.label} className="react-tabs__tab tab">
                <S.TabTitle>{link.title}</S.TabTitle>
                <S.IconWrapper>
                  <Icon style={{ color: link.iconColor }} />
                </S.IconWrapper>
              </Tab>
            )
          })}
        </TabList>

        {tabContents.map(tabContent => (
          <TabPanel className="react-tabs__tab-panel tab-panel">
            <h2>{tabContent.title}</h2>
          </TabPanel>
        ))}
      </Tabs>
    </S.TechsWrapper>
  )
}

export default TechsMenu