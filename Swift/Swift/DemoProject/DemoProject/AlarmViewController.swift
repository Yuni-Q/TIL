//
//  AlarmViewController.swift
//  DemoProject
//
//  Created by YunHee Lee on 01/12/2018.
//  Copyright © 2018 YunHee Lee. All rights reserved.
//

import UIKit

class AlarmViewController: UIViewController, UITableViewDataSource, UITableViewDelegate
{
    let alarmData = AlarmDatas.init()
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return alarmData.alarmList.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        var cell = UITableViewCell.init()
        cell.textLabel?.text = alarmData.alarmList[indexPath.row]
        return cell
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
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
