import {View, Text, Image} from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants' 

const TabIcon=({icon,color,name,focused})=>{
    return(
        <View>
            <Image
             source={icon}
             resizeMode="contain"
             className="w-6 h-6" 
            />
        </View>
    )
}
const TabLayout = () => {
    return(
        <> 
          <Tabs>
            <Tabs.Screen
             name="home"
             options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({color,focused}) =>(
                    <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}
                    />
                )

             }}
            />
            
            <Tabs.Screen
             name="search"
             options={{
                title:'Search',
                headerShown:false,
                tabBarIcon:({color,focused}) =>(
                    <TabIcon
                    icon={icons.search}
                    color={color}
                    name="Search"
                    focused={focused}
                    />
                )

             }}
            />
            <Tabs.Screen
             name="bookmark"
             options={{
                title:'Bookmark',
                headerShown:false,
                tabBarIcon:({color,focused}) =>(
                    <TabIcon
                    icon={icons.bookmark}
                    color={color}
                    name="Bookmark"
                    focused={focused}
                    />
                )

             }}
            />
            <Tabs.Screen
             name="chat"
             options={{
                title:'Chat',
                headerShown:false,
                tabBarIcon:({color,focused}) =>(
                    <TabIcon
                    icon={icons.chat}
                    color={color}
                    name="Chat"
                    focused={focused}
                    />
                )

             }}
            />
          </Tabs>
        </>
    )
} 
export default TabLayout