import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const configStore = (set: any) => ({
    asBusiness: false,
    toggleAsBusiness: () => set((state: any) => ({ asBusiness: !state.asBusiness })),

    login_pane_visibility: false,
    set_login_pane_visibility: (state: any) => set(() => ({ login_pane_visibility: state })),

    drawer_visibility: false,
    set_drawer_visibility: (state: any) => set(() => ({ drawer_visibility: state })),

    user_country_data: {} as any,
    set_user_country_data: (payload: any) => set(() => ({ user_country_data: payload })),

    payment_open:false,
    set_payment_open: (state: boolean) => set(() => ({ payment_open: state })),

    payment_pane_status: false,
    open_payment_pane: () => set(() => ({ payment_pane_status: true })),
    close_payment_pane: () => set(() => ({ payment_pane_status: false })),

    payment_callback: '',
    set_payment_callback: (callback: any) => set(() => ({ payment_callback: callback })),


    payment_widget_visibility: false,
    set_payment_widget_visibility: (state: any) => set(() => ({ payment_widget_visibility: state })),

    
    tutorial_watch_pane: false,
    set_tutorial_watch_pane: (bool: any) => set(() => ({ tutorial_watch_pane: bool })),

    pageTitle: `` as any,
    setPageTitle: (title: any) => set(() => ({ pageTitle: `${title}` })),

    appTheme: `inherit` as any,
    setAppTheme: (theme: any) => set(() => ({ appTheme: `${theme}` })),

    sideBarCollapse: false,
    setSideBarCollapse: (collapse: boolean) => set(() => ({ sideBarCollapse: collapse })),

    openedProjects: [] as any,
    setOpenedProjects: (projects: any) => set(() => ({ openedProjects: projects })),

    activeTab: `home` as string,
    setActiveTab: (identifier: string) => set(() => ({ activeTab: `${identifier}` })),

    openSettings: false,
    setOpenSettings: (state:boolean) => set(() => ({ openSettings: state })),

    openReports: false,
    setOpenReports: (state:boolean) => set(() => ({ openReports: state })),

    stateType: `design` as any,
    setStateType: (state: any) => set(() => ({ stateType: `${state}` })),

    openNewProject: false,
    setOpenNewProject: (state: any) => set(() => ({ openNewProject: state })),

    
});


// Apply middlewares (devtools and persist)
export const useConfigStore = create(
    devtools(
        persist(configStore, { name: 'flowstudio_config' })
    )
);


