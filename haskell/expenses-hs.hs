import Prelude
import FFI

data Element
data Event

querySelector :: String -> Element
querySelector = ffi "document.querySelector(%1)"

setWidth :: Element -> String -> Fay ()
setWidth = ffi "%1.style.width = %2"

getLocalStorageItem :: String -> Double
getLocalStorageItem = ffi "localStorage.getItem(%1)"

budgetPercent :: Double -> Double -> Double ->
  Double -> Double -> Double -> Double -> Double -> Double
budgetPercent total n1 n2 n3 n4 n5 n6 n7 = 
  (remainingBudget / total) * 100
  where remainingBudget = total - n1 - n2 - n3 - n4 - n5 - n6 - n7

addOnClickEvent :: Element -> String -> (Event -> Fay ()) -> Fay ()
addOnClickEvent = ffi "%1.addEventListener(%2, %3)"

setProgressBar :: Event -> Fay ()
setProgressBar event = do
  setWidth (querySelector ".progressBar #totalBudget")
    (show (budgetPercent (getLocalStorageItem "totalBudget")
    (getLocalStorageItem "budgetItemCar")
    (getLocalStorageItem "budgetItemHouse")
    (getLocalStorageItem "budgetItemApartment")
    (getLocalStorageItem "budgetItemPersonal")
    (getLocalStorageItem "budgetItemClothes")
    (getLocalStorageItem "budgetItemFood")
    (getLocalStorageItem "budgetItemSports")) ++ "%")
  
main :: Fay ()
main = do
  addOnClickEvent (querySelector "#enterExpense")
    "click" setProgressBar
  