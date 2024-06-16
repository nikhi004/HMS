import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HostelModuleBase } from "./base/hostel.module.base";
import { HostelService } from "./hostel.service";
import { HostelController } from "./hostel.controller";
import { HostelResolver } from "./hostel.resolver";

@Module({
  imports: [HostelModuleBase, forwardRef(() => AuthModule)],
  controllers: [HostelController],
  providers: [HostelService, HostelResolver],
  exports: [HostelService],
})
export class HostelModule {}
