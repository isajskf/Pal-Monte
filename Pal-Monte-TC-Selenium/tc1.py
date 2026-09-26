from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

""""
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=options)
"""

driver.get("https://www.saucedemo.com/")
print("Prueba pasada con éxito - Abrir navegador y abrir la página web")
driver.find_element(By.ID, "user-name").send_keys("standard_user")
print("Prueba pasada con éxito - Ingresar nombre de usuario")
driver.find_element(By.ID, "password").send_keys("secret_sauce")
print("Prueba pasada con éxito - Ingresar contraseña")
login=driver.find_element(By.ID, "login-button")
assert login.is_displayed(), "El botón de inicio de sesión no se muestra"
print("Prueba pasada con éxito - Verificar que el botón de inicio de sesión se muestre")

driver.find_element(By.ID, "login-button").click()
print("Prueba pasada con éxito - Hacer clic en el botón de inicio de sesión")

#titulo=driver.find_element(By.CLASS_NAME, "title")
#assert titulo == "PRODUCTS", "El título de la página no es 'PRODUCTS'"
#print("Prueba pasada con éxito - Verificar el título de la página")


imagen=driver.find_element(By.CSS_SELECTOR, '[data-test="inventory_item_sauce_labs_backpack_img"]')
assert imagen.is_displayed(), "La imagen no se muestra"
print("Prueba pasada con éxito - Verificar que la imagen se muestre")

#driver.quit()
