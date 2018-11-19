//
//  ViewController.swift
//  MoneyConverter
//
//  Created by YunHee Lee on 2018. 4. 13..
//  Copyright © 2018년 YunHee Lee. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var currencySegment: UISegmentedControl!

    @IBOutlet weak var sourceMoneyField: UITextField!
    
    @IBOutlet weak var tagetMoneyLable: UILabel!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func convertMoney(_ sender: Any) {
        // if let(내부로 들어가서 구현)과 guard let(else 쓸수 잇음)
        guard let sourceCurrency = Currency(rawValue: currencySegment.selectedSegmentIndex)else {
                print("Source Currency Error")
                return
        }
        
        guard let sourceAmount = Double(sourceMoneyField.text!) else {
            tagetMoneyLable.text = "Error"
            return
        }
        
        let sourceMoney = Money(sourceAmount, currency: sourceCurrency)
//
//        let ratio : Double
//        switch currencySegment.selectedSegmentIndex {
//        case 0:
//            ratio = 0.00085
//        case 1:
//            ratio = 1175.8
//        default:
//            ratio = 1
//        }
//        let targetMoneyString:String
//        if let sourceMoney = Double(sourceMoneyField.text!){
//            targetMoneyString = "\(sourceMoney * ratio)"
//        }else{
//            targetMoneyString = "Error"
//        }
        var targetMoneyString = ""
        
        for i in 0...3 {
            targetMoneyString += sourceMoney.valueInCurrency(currency: Currency.init(rawValue: i)!)
            targetMoneyString += "\r\n"
            
        }
        tagetMoneyLable.text = targetMoneyString
    }
    
    
    
    
}


