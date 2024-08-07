import { AppRoutes } from "./routes"
import { MenuLateral } from "./shared/components"


export const App = () => {
  return (
    <>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </>
  )
}
