import {createRouter,createWebHashHistory} from 'vue-router'
import Login from "../views/Login.vue"

import Adm from "../views/adm/Adm.vue"

import Adm_Stu_Add from "../views/adm/stu/Add.vue"
import Adm_Stu_Show from "../views/adm/stu/Show.vue"

import Adm_Tea_Add from "../views/adm/tea/Add.vue"
import Adm_Tea_Show from "../views/adm/tea/Show.vue"

import Adm_Clz from "../views/adm/Clz.vue"

import Adm_Course from "../views/adm/Course.vue"

import Adm_Head from "../views/adm/Head.vue"

import Adm_Task from "../views/adm/Task.vue"

import Stu from "../views/stu/Stu.vue"
import Stu_Mark from "../views/stu/Mark.vue"
import Stu_Course from "../views/stu/Course.vue"

import Tea from "../views/tea/Tea.vue"
import Tea_DoMark from "../views/tea/DoMark.vue"
import Tea_GoMark from "../views/tea/GoMark.vue"
import Tea_Pwd from "../views/tea/Pwd.vue"
import Tea_Head from "../views/tea/Head.vue"


const routes = [{
		path: "/login",
		component: Login
	},
	{
		path: "/adm",
		component: Adm,
		children: [{
				path: "stu",
				component: Adm_Stu_Show
			},
			{
				path: "tea",
				component: Adm_Tea_Show
			},
			{
				path: "addstu",
				component: Adm_Stu_Add
			},
			{
				path: "addtea",
				component: Adm_Tea_Add
			},
			{
				path: "clz",
				component: Adm_Clz
			},
			{
				path: "course",
				component: Adm_Course
			},
			{
				path: "head",
				component: Adm_Head
			},
			{
				path: "task",
				component: Adm_Task
			},

		]
	},
	{
		path: "/stu",
		component: Stu,
		children: [{
				path: "mark",
				component: Stu_Mark
			},
			{
				path: "course",
				component: Stu_Course
			},
		]
	},
	{
		path: "/tea",
		component: Tea,
		children: [{
				path: "domark",
				component: Tea_DoMark
			},
			{
				path: "gomark",
				component: Tea_GoMark
			},
			{
				path: "pwd",
				component: Tea_Pwd
			},
			{
				path: "head",
				component: Tea_Head
			}
		]
	}
]


// 注册路由表   告诉 Vue-router 路由数组
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes
})

//export  暴露出来，为 import
export default router