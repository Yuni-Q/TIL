//
//  AlarmSettingViewController.swift
//  DemoProject
//
//  Created by YunHee Lee on 01/12/2018.
//  Copyright © 2018 YunHee Lee. All rights reserved.
//

import UIKit

class AlarmSettingViewController: UIViewController {

    @IBOutlet weak var titleTextField: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        titleTextField.text = "타이틀 입니다."
        // Do any additional setup after loading the view.
    }
    
    @IBAction func clickAddAlarmButton(_ sender: UIButton) {
        var text = titleTextField.text
        print("\(text!)")
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
